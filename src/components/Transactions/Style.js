export function RowColor(styles, index) {
  if (index % 2 === 0) {
    return styles.rowWhite;
  } else {
    return styles.rowGrey;
  }
}
