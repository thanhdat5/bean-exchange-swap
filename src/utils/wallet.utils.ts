export function shortWalletAddress(address: string) {
  if (!address) {
    return "";
  }
  if (address.length <= 15) {
    return address;
  }
  if (address.length === 34 && address.match(/^M/)) {
    return address.slice(0, 5) + "..." + address.slice(address.length - 3);
  }
  return address.slice(0, 12) + "...";
}
