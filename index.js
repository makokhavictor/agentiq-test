function getListSize(pointer) {
  let node = pointer;
  size = 0;
  if (node) {
    while (node) {
      size++;
      node = node.next;
    }
  }
  return size;
}

function getCountFromEndofList(pointer, n) {
  let node = pointer;
  let tmp;
  let head;
  const listSize = getListSize(node);
  const startingIndex = listSize - n;
  for (i = 0; i < listSize; i++) {
    tmp = node;
    node = node.next;
    if (i == startingIndex) {
      head = tmp;
      break;
    }
  }
  return head || null;
}

const list = {
  data: 3,
  next: {
    data: 4,
    next: {
      data: 5,
      next: {
        data: 6,
      },
    },
  },
};
console.log(getCountFromEndofList(list, 4));
