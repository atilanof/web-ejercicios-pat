(function(global) {
    const taskStyles = ['checked', 'unchecked'];
    const questionStyles = ['answer', 'question'];

    function save(id, value) { global.localStorage && global.localStorage.setItem(id, value); }
    function read(id) { return global.localStorage && global.localStorage.getItem(id); }

    function fitContent(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    global.onhashchange = function() { 
        Array.from(global.document.querySelectorAll('.footnote-definition')).forEach(e => 
            e.id === global.location.hash.substring(1) ? 
            e.classList.add("highlight") || e.classList.remove("lowlight") :
            e.classList.remove("highlight") || e.classList.add("lowlight")
        );
    }

    global.onbeforeprint = function() {
        Array.from(global.document.querySelectorAll('li.' + questionStyles[1])).forEach(li => li.ondblclick(true));
    }

    Array.from(global.document.querySelectorAll('li > input[type="checkbox"]')).forEach(i => { 
        const li = i.parentElement;
        const id = global.location.pathname + Array.from(li.parentNode.children).indexOf(li);

        i.disabled = false;
        i.style.display = 'none';

        (li.ondblclick = (e) => { 
            if (e && e.clientX - e.target.getBoundingClientRect().left > 0) return;
            const styles = li.innerText.endsWith('?') ? questionStyles : taskStyles;
            i.checked = e ? !i.checked : (read(id) || i.checked);
            li.className = i.checked ? styles[0] : styles[1];
            styles === taskStyles && save(id, i.checked ? i.checked : "");
        })();

        if (questionStyles.includes(li.className)) {
            const textarea = global.document.createElement("textarea");
            textarea.oninput = () => fitContent(textarea) || save(textarea.id, textarea.value);
            textarea.id = id;
            textarea.value = read(id);
            ['br','hr'].includes(li.lastElementChild.nodeName.toLocaleLowerCase()) ?
                li.insertBefore(textarea, li.lastElementChild) :
                li.appendChild(textarea);
            textarea.value && textarea.oninput();
        }
    });
})(this);