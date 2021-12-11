type Props = {
  //@ts-ignore
  spacing: Spacing,
  children?: any,
  stretch?: boolean;
}
const Spacer = (props: Props) => {
  return <div className={`spacer--${props.spacing}`}>
    {props.children}
  </div>;
};

export const Example = () => {
  return <>
      <Spacer
        spacing="small"
        stretch={true}
      >
        <div/>
      </Spacer>
      <Spacer spacing="medium" />
      <Spacer spacing="large" />
    </>;
};
