export function filterTires(tires, filters) {
  return (tires || []).filter((tire) => {
    const width = tire.width ? Number(tire.width) : null;
    const height = tire.height ? Number(tire.height) : null;
    const diameter = tire.diameter ? Number(tire.diameter) : null;

    return (
      (!filters.brand ||
        tire.supplier.toLowerCase() === filters.brand.toLowerCase()) &&
      (!filters.width || width === Number(filters.width)) &&
      (!filters.height || height === Number(filters.height)) &&
      (!filters.diameter || diameter === Number(filters.diameter)) &&
      (!filters.season ||
        tire.season.toLowerCase() === filters.season.toLowerCase())
    );
  });
}