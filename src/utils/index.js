export function isHashTagLink(string) {
  if (string.includes('#')) {
    return string.replace(
      /#(\S*)/g,
      '<a href="http://twitter.com/#!/search/$1">#$1</a>'
    );
  } else {
    return string;
  }
}
