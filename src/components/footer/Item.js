import { useEffect } from "react"

const Item = ({style, name, onClickHandle, id}) =>
{
  useEffect(() =>
  {
    console.log('Item is rendered');
  },[])

  return (
    <section className={style}
    onClick={onClickHandle} id={id}>{name}</section>
  )
}

export default Item