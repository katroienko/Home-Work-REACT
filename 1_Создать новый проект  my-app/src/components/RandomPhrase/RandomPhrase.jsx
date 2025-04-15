// Определите массив фраз внутри компонента.
// 3. Используйте функцию Math.random() для выбора случайной фразы из массива.
// 4. Импортируйте компонент в App.js.
// 5. Запустите приложение, проверьте, что всё получилось.

import randomPhrase from './random-phrase'
import { generateRandomArrayIndex } from '../../utils/use-function';


function RandomPhrase(){
    return <div> {randomPhrase[generateRandomArrayIndex(randomPhrase.length)]}</div>

}

export default RandomPhrase;