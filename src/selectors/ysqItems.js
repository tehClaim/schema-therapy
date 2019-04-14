export default (ysqItems, page, pageSize) => {
  const count = ysqItems.length;
  const maxPage = Math.ceil(count / pageSize);
  return ysqItems.filter((item, index) => {
    console.log('in selector ITEM', item);
    if (index <= page * pageSize - 1 && index >= page * pageSize - pageSize - 1) return true;
    return false;
  });
};
