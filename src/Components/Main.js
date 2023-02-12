import Button from "./Button";
import Icon from "./../shopping-add.svg";
import Input from "./Input";
import startIcon from "./../phone.svg";
import endIcon from "./../lock.svg";

function Main() {
  return (
    <div className="main">
      <div className="section btn-container-all hidden" id="Buttons">
        <h1 className="section-header">Buttons</h1>
        <div className="btn-row-container width-sm">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button />`}</h2>
            <Button text="Default" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`&:hover, &:focus`}</h2>
            <Button text="Default" variant="btn-hover btn-focus" />
          </div>
        </div>
        <div className="btn-row-container width-sm">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button variant="outline" />`}</h2>
            <Button text="Default" variant="outline" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`&:hover, &:focus`}</h2>
            <Button text="Default" variant="outline-hover outline-focus" />
          </div>
        </div>
        <div className="btn-row-container width-sm">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button variant="text" />`}</h2>
            <Button text="Default" variant="text" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`&:hover, &:focus`}</h2>
            <Button text="Default" variant="text-hover text-focus" />
          </div>
        </div>
        <div className="btn-row-container width-sm">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button disableShadow />`}</h2>
            <Button text="Default" variant="disableShadow" />
          </div>
        </div>
        <div className="btn-row-container width-md">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button disabled />`}</h2>
            <Button text="Disabled" variant="disabled" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button variant="text" disabled`}</h2>
            <Button text="Disabled" variant="text-disabled" />
          </div>
        </div>
        <div className="btn-row-container width-lg">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button startIcon="local_grocery_store" />`}</h2>
            <Button
              text="Default"
              variant="disableShadow btn-lg"
              iconStart={<img alt="" src={Icon} className="start-icon" />}
            />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button endIcon="local_grocery_store" />`}</h2>
            <Button
              text="Default"
              variant="disableShadow btn-lg"
              iconEnd={<img alt="" src={Icon} className="end-icon" />}
            />
          </div>
        </div>
        <div className="btn-row-container width-lg">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button size="sm" />`}</h2>
            <Button text="Default" variant="disableShadow btn-sm" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button size="md" />`}</h2>
            <Button text="Default" variant="disableShadow btn-md" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button size="lg" />`}</h2>
            <Button text="Default" variant="disableShadow btn-lg" />
          </div>
        </div>
        <div className="btn-row-container width-xlg">
          <div className="btn-container">
            <h2 className="btn-type">{`<Button color="default" />`}</h2>
            <Button text="Default" variant=" btn-md " />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button color="primary" />`}</h2>
            <Button text="Default" variant="disableShadow btn-md" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button color="secondary" />`}</h2>
            <Button text="Default" variant="light-secondary btn-md" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{`<Button color="danger" />`}</h2>
            <Button text="Default" variant="light-danger btn-md" />
          </div>
        </div>
        <div className="btn-row-container width-xlg">
          <div className="btn-container">
            <h2 className="btn-type">{"&:hover, &:focus;"}</h2>
            <Button text="Default" variant=" btn-md " />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{``}</h2>
            <Button text="Default" variant="dark-disableShadow btn-md" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{``}</h2>
            <Button text="Default" variant="dark-secondary btn-md" />
          </div>
          <div className="btn-container">
            <h2 className="btn-type">{``}</h2>
            <Button text="Default" variant="dark-danger btn-md" />
          </div>
        </div>
      </div>
      <div className="section input-container-all" id="Inputs">
        <h1 className="section-header">Inputs</h1>
        <div className="input-row-container width-lg-input">
          <Input
            topText="<Input />"
            label="Label"
            className="input input-md border-light "
          />
          <Input
            topText="&:hover"
            label="Label"
            className="input input-md border-hover "
            state="hover"
          />
          <Input
            topText="&:focus"
            label="Label"
            className="input input-md border-focus "
            state="focus"
          />
        </div>
        <div className="input-row-container width-lg-input">
          <Input
            topText="<Input error />"
            label="Label"
            className="input input-md border-danger "
            variant="text-danger"
          />
          <Input
            topText="&:hover"
            label="Label"
            className="input input-md border-hover "
            state="hover"
          />
          <Input
            topText="&:focus"
            label="Label"
            className="input input-md border-danger "
            state="focus"
            variant="text-danger"
          />
        </div>
        <div className="input-row-container width-sm-input">
          <Input
            topText="<Input disabled />"
            label="Label"
            className="input input-md input-disabled "
          />
        </div>
        <div className="input-row-container width-lg-input ">
          <Input
            topText={`<Input helperText="Some interestin text" />`}
            label="Label"
            bottomText="Something interesting text"
            className="input input-md border-light "
          />
          <Input
            topText={`<Input helperText="Some interestin text" error />`}
            label="Label"
            bottomText="Some interesting text"
            className="input input-md border-danger "
            variant="text-danger"
          />
        </div>
        <div className="input-row-container width-lg-input ">
          <Input
            inputContainerWidth="input-md"
            inputContainerIcon={true}
            topText={`<Input startIcon />`}
            label="Label"
            className="input input-md-icon borderless "
            startIcon={<img alt="" src={startIcon} className="start-icon" />}
          />
          <Input
            inputContainerWidth="input-md"
            inputContainerIcon={true}
            topText={`<Input endIcon />`}
            label="Label"
            className="input input-md-icon borderless "
            endIcon={<img alt="" src={endIcon} className="end-icon" />}
          />
        </div>
        <div className="input-row-container width-lg-input">
          <Input
            topText={`<Input value="text" />`}
            label="Label"
            className="input input-md border-light "
            value="Text"
          />
        </div>
        <div className="input-row-container width-lg-input">
          <Input
            topText={`<Input size="sm" />`}
            label="Label"
            className="input input-sm border-light "
          />
          <Input
            topText={`<Input size="md" />`}
            label="Label"
            className="input input-md border-light "
          />
        </div>
        <div className="input-row-container width-lg-input">
          <Input
            topText={`<Input fullWidth />`}
            label="Label"
            className="input input-lg border-light "
          />
        </div>
        <div className="input-row-container width-lg-input">
          <Input
            inputType="textarea"
            topText={`<Input multiline row="4" />`}
            label="Label"
            className="input input-textarea border-light "
          />
        </div>
      </div>
      <div className="footer">
        {" "}
        ©<a href="https://tomiwa-portfolio.netlify.app">Tomiwa</a> 2023
      </div>
    </div>
  );
}

export default Main;
