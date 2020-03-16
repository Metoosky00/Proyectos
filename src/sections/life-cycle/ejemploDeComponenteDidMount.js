import React from 'react';

export default class EjemploDeComponentDidMount extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state={scroll:0}
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
        document.addEventListener('scroll',() =>{
            this.setState({scroll:window.scrollY})
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                <h4>Ciclo de montaje: componentDidMount</h4>
                <p>El scroll es {this.state.scroll}</p>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaa
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    ccccccccccccccccccccccccc
                    ddddddddddddddddddddd
                    eeeeeeeeeeeeeeeeeee
                    ffffffffffffffffffffffffffffff
                    ggggggggggggggggggggggggggggggggg
                    hhhhhhhhhhhhhhhhhhhhhhhhhh
                </p>
                <p>iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                   jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                   kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                   llllllllllllllllllllllllllllllllll
                   mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                   nnnnnnnnnnnnnnnnnnnnnnnn
                   ñññññññññññññññññññññññññ
                </p>
                <p>ooooooooooooooooooooooooooooooooo
                    pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                    qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                    sssssssssssssssssssssssssssssssss
                    ttttttttttttttttttttttttttt
                </p>
                <p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyy
                    zzzzzzzzzzzzzzz
                </p>
            </div>
        );
    }
}