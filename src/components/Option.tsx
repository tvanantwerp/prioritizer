interface Props {
  label: string;
  handler: () => void;
}

const Option = ({label, handler}: Props) => {
  return (
    <button onClick={handler}>{label}</button>
  )
}

export default Option;