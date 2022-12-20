import { useEffect } from "react"

// This is an Item component. It is used in Footer component.
//  It represents one item in main 'slider'

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