class RenderList {
    result = "";
    static renderList(list) {
        list.forEach(item => {
        result = result + <li className="mdc-list-item">
            <span className="mdc-list-otem__text">item.name</span>
        </li>
        });
        
    }
}