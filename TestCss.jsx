import styles from "./TestCss.module.css";
const TestCss = () => {
  const format = {
    color: "red",
    backgroundColor: "yellowgreen",
    fontSize: 25,
  };
  return (
    <>
      <p className={`${styles["test"]}`}>Welcome to Cyber Success</p>
      <p style={format}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic neque
        accusamus minima officiis itaque praesentium. Nam adipisci error totam
        facilis repellendus suscipit ut ex, sint laboriosam eos repellat
        quibusdam tenetur doloribus voluptatibus voluptatum optio! Animi labore
        neque eaque at nemo soluta, omnis, aspernatur illum, repudiandae iure
        natus modi eligendi quos.
      </p>
    </>
  );
};
export default TestCss;
