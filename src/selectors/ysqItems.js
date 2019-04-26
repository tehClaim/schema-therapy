export default (ysqItems, page, pageSize) => {
  return ysqItems.filter((item, index) => {
    if (index >= (page - 1) * pageSize && index < page * pageSize) return true;
    return false;
  });
};
