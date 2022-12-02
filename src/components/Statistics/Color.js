export function BegColor(styles, index) {
  switch (index) {
    case 0:
      return styles.item;

    case 1:
      return styles.first;

    case 2:
      return styles.second;

    case 3:
      return styles.third;

    case 4:
      return styles.forth;

    default:
      console.log('Null');
      break;
  }
}
