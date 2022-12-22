# Customizable React Modal Plugin

## Example

Below an example which was used as validation for an employee record form
![Modal Plugin Example](/src/example/React-Modal-Plugin-Example-w-Comments.png)

_Full example code is available in_`src/example/App.js`

---

## Installation

### NPM Link

[React Modal Plugin](https://www.npmjs.com/package/yk-react-modal-plugin)

### Project Installation

In your project directory, run the following command to install the npm package:

```sh
npm i yk-react-modal-plugin
```

## How to import the component in your project ?

In your file, import the component from the installed package like this:

```sh
import { Modal } from 'yk-react-modal-plugin'
```

_Use your own parameters according the example_

```
import { Modal } from "yk-react-modal-plugin";

 const [modalIsOpen, setModalIsOpen] = useState();
 <Modal
      display={modalIsOpen}
      setDisplay={setModalIsOpen}
      img={img}
      title="title"
      txt="txt"
    />

```
