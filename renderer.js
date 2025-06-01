const information = document.getElementById('info')
information.innerText = `this app is using chrome (v${versions.chrome()}), node.js (v${versions.node()}), and electron (v${versions.electron()})`
const func = async () => {
    const response = await window.versions.ping()
    console.log(response) //prints out 'pong'

}
func()
