import { useState, useMemo, useCallback } from 'react';

interface ISortConfig {
  key: string;
  direction: string;
}

interface IUseSortableDataReturn {
  sortedItems: Array<any>;
  requestSort(key: string): void;
  sortConfig: ISortConfig | null;
}

export const useSortableData = (
  data: Array<any>,
  config = null,
): IUseSortableDataReturn => {
  const [sortConfig, setSortConfig] = useState<ISortConfig | null>(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...data];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'name') {
          if (a[sortConfig.key].first < b[sortConfig.key].first) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key].first > b[sortConfig.key].first) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = useCallback(
    (key: string) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig?.key === key &&
        sortConfig?.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    },
    [sortConfig],
  );

  return { sortedItems, requestSort, sortConfig };
};
