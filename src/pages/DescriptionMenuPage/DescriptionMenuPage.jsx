import style from "./DescriptionMenuPage.module.css";

const DescriptionMenu = () => {
  return (
    <div className={style.descriptionContainer}>
      <h1 className={style.descriptionTitle}>Description</h1>
      <div className={style.descriptionText}>
        "Some elements on this portfolio site may not be essential, but this
        page serves as a creative space to demonstrate additional skills and
        ideas. It’s a place where I experiment with new features, designs, and
        concepts to showcase my growth as a developer. Over time, you’ll find
        more examples of my work here, from innovative solutions to experimental
        projects. Thank you for taking the time to explore this page, and I hope
        it inspires you to see the range of what I can create!".
        <p className={style.descriptionText2}>
          To view the menu, click on the book!
        </p>
      </div>
    </div>
  );
};

export default DescriptionMenu;
