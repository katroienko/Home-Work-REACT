// export default function Greeting({ name = "Гость" }) {
//     return <h1>Привет, {name}!</h1>;
//   }



export default function Greeting(props) {
    return <h1>Привет, {props.name}!</h1>;
}