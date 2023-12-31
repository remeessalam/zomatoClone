{

> This is how we create a element in react
> const title = React.createElement(
> "h1",
> { style: { background: "red" }, className: "hello", id: "thisisid" },
> "hello world"
> ); >This is how it render
> const root = ReactDOM.createRoot(document.getElementById("root"));
> root.render(Header);

     >Config diver ui
     >Optional chainging => ?.
     >Map and for each check
     >Reconsolation and diff alghoritham
     >React fiber
     >React why not to use index as key

     ============================================================

     > First rendere and then use effect
     > Shimmer ui and data ui (this is how the loader is showing) shimmer is means the skelton is show before data comes oposite is other
     > Conditonal rendering
     > Everthing in react is commponent
     > JS Expression and statement
     > Micro service and monilith read

     ============================================================

     > If we didn't give dipendency array it call every time its render => useEffect (()=>{ -> useEffect take a callback funtion and a dependancy array
     },[]); -> this is dipendancy array -> when i give anything in that if that change the compnent will render)
     > Never do write a component in a component
     > Never use a useState in a if condition
     > Dont use useState out of the component use in only in component
     > CDN is great way to store our images -> read CDN
     > React-router-dom
     > Client side routing and server side routing

     ============================================================

     --class based component--
     > want to check more about react router dom
          ____class component sample____
     > class Profile extend React.Component {        -> This is how we create class components first add class key word and component name and extend from react. component

        consturctor (props){ -> Study more about this
            super(props);
            this.state = {  -> Here we create state in class component
                count : 0,
                count2: 1,
            };
        };
        componentDidMount(){ ->  Here we can do after render 'best place for api call'

        };

        render () {
            const {count} = this.state;
            return (
                <h1> This render things </h1>
                <h3>{this.props.name}</h3>  -> This is how we get props in class component
                <h1>Count = {count}</h1>
                <button onClick(()=> this.setState(count:1,count2:2 ))> Add Count </button>
            );
        };
     };
     export default Profile;
     class component life cycle method is like first contructor will call and then render call then componentDidMount
          _______________________________
     > Most important part in class component is render() !  could not make a class component with out a class component
     > Never mutate state directly
     > React have two fases
        -Render phase - pure and has no side effect. may be paused, abourted or restarted by React
        -Commit phase - can work with DOM, run side effect, schedule updates
     > React life cycle method in class component
                    {
                        parent consturctor
                        parent render
                        first child consturctor
                        first child render
                        second child consturctor
                        second child render

                         first child componentDidMount
                         second child componentDidMount
                    }
     > We can make consturctor function  async but we can't do in useEffect
     > Never compare react lifecycle method of functional component  with class component

     ============================================================

     Video = 9


     Topic -> [1 : create our own hook], [System design], [Own demant loading, Dynamic import]

     [1]
     > Reusability
     > Readabilty
     > Maintainability
     > Custom hook is just a function

        isOnline = ()=>{
            const [online, setOnline] = useState(false);

            useEffect(()=>{
                const handleOnline = ()=>{
                    setOnline(true)
                }
                const handleOffline = ()=>{
                    setOnline(false)
                }
                window.addeventLisner('online', handleOnline)
                window.addeventLisner('offline', handleOffline)

                return(
                    window.removeeventLisner('online', handleOnline)
                    window.removeeventLisner('offline', handleoffline)
                )
            }, [])

            return online ;
        } -> this is a custom hook it is returning a state that we have internet connection or not
        export default isOnline;

     > React have a lazy loading it creat a different bundle for that
        {
            import react, { lazy, Suspense } from 'react'
            const Component = lazy(()=>import("../give-path") -> This will make a different bundle  && This is a promise

            -> note i will not render becuse react render before it came  then we can use something know as suspense react librery gives that

            Wrap our component in that like <Suspense fallback={<loader />}> <Component /></Suspense>  -> This Suspense component takes a prop called fallback there we can pass before loading that component what we can show
        }
     > When we are load our component in demand react try suspend it

     ============================================================

     video = 10

     Topic -> [tailwind css]  optimaise css, save time

     > Type of styleing [Normal CSS, SCSS, Inline Style, Frameworkd like - mui, base, chakra etc.., Styled component, Tailwind CSS ]
     > Css on the go (in the same file)
     > Reusability
     > Less bundle size
     > Flexible UI (Custimization)
     > Merits - > Easy to debug,Less code is shiped, Is to use,

     ============================================================

     video = 11

     Topic -> useContext
     > To create a context like this
            import {createContext} from 'react';  -> import createContext from react to create a context
                const variable = createContext({   -> create context is a function take a default vaule like this
                    user:'remees'
                })
                export default variable; -> We want to export this to get values



     > This is how we use context in component

            import {useContext} from 'react'; -> import useContext form react to use value
            import dummy from '../pathe' -> import that context variable here

                const variable = useContext(dummy) -> This is how take that variable to component 











     ============================================================

     video = 12

     Topic -> Redux  [ Redux is a store that we can add data to it. It keep data in slice like(userSlice, cartSlice etc...) ]

     > We can't modify directly that store from component, We dispatch actions -> action it's call a funtion this function modify the store { That function is called is reduxer function} and update the slice of thw store
     > Selector will ready the data in store {selecting the porsion of the store that is calling selector} selector is a hook. know as useSelector.
     > import { configureStore } from '@reduxjs/toolkit'; -> This is how we create a store

        export const store = configureStore({
            reducer:{
                give a name : slicename;
            }
        })

        export default store;

     > import {createSlice} from '@reduxjs/toolkit'; -> This is how we create a slice
        const cartSlice = createSlice({
            name:'cart',
            initialState:{
                items:[]
            },
            reducer:{
               additem : ( state -> this is initialState, action -> have the data that we send form dispatch )=>{
                    'and we can modify our store like'
                    state.items.push(action.payload)
                }
            }
        })

        export const {additem, other reducer} = cartSlice.actions;

        export default cartSlice.reducer;

     > we want to wrap all the component in the provider

         import store form 'path';
         import {provider} from 'redux-react';

         <provider store={store}>
         <conponent s/>
         </provider>

     > we take store data to our component

      import {useSelector, useDispatch} from 'react-redux;
      import {clearcart} from 'cartSlice'

       const component =()=>{
        const dispatch = useDispatch()
        const data = useSelctor(store => store.slicename.item) -> name what we want subscribe To subscribe  (! this is important dont take everthing from store only speciifc porsion)
        const removeItem = ()=>{
            dispatch(clearcart())-> this will dispatch function to clear the cart
        }
        return (
            <h1> {data.name} <h1/>
        )
       }


     ============================================================

     video = 13

     Topic -> [testing]

     >






     ============================================================

     useMemo

     > const variableName = useMemo(itTakesHeavyOperationFuntion()=>{},[take a dependancy]) -> this will only call when the dependancy change

        ex:-
          const [text, setText] = useState()
          const prime = useMemo(()=>findPrime(text),[text]) -> it is cachening the result and only change we dependancy change

     useRef

     > const text = useRef(initialValue)  it will return an object
     > We can udate that variabe like text + 1
     > Its hold the value when the page is rendering also





     ============================================================


     Machine code interview and build youtube

     > Requirement and clarification
     > Features
     > Teck stack  -> redux, tailwind, React router dom, bundler, testing ->give a good justification '5 minute'
     >URL search params
     > Debousing
     > LRU chaching

}
