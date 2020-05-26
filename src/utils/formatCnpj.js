const formatCnpj = (string) => {
  return string.replace(/[^0-9]/g, "")
}

export default formatCnpj;
