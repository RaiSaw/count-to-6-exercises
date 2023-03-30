console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
    function html(char, ...str) {
        // what goes here?
        // don't forget to return the escaped string!
        const htmlEnt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
          };
        const pwe=(esc)=>{
            return esc
            .replace(/([&<>\"'])/g, match => htmlEnt[match]);
        }
        let ssh = char[0];
        for(let i=0; i<str.length; i++){
            ssh += pwe(str[i]) + char[i+1];
        }
        return ssh;
    }