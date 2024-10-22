export default function willChange (elem, action, [...arr]) {


    // Проверяем, что элемент существует и массив не пустой
    if (!elem || arr.length === 0) return;

    if (action === 'add') {
        // Добавляем свойство will-change с значениями из массива
        elem.style.willChange = arr.join(', ');
    } else if (action === 'remove') {
        // Удаляем свойство will-change, возвращая его в состояние по умолчанию
        elem.style.willChange = 'auto';
    }

}