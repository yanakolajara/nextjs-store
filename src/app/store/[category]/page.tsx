interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  const { category } = props.params;
  console.log(props);
  return <h1>Categoria dinamica: {category}</h1>;
}
