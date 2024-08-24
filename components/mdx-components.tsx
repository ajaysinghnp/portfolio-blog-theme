export const components = {
  h1: (props: any) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
}