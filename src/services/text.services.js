

const subText = (str, n) => {
   return str.length > n?str.substring(0,n)+"...":str;
}

export { subText }