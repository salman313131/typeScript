import {Router} from 'express'
import {Todo} from '../model/todos'

const router = Router()

let todos: Todo[] =[]
type requestBody = {text:string}
type requestParams = {todoId:string}

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})
router.post('/todo',(req,res,next)=>{
    const body = req.body as requestBody
    const newTodo : Todo={
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo)
    res.status(200).json({todos:todos})
})
router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams
    const tid = params.todoId
    const body = req.body as requestBody
    const todoIndex = todos.findIndex(todoItem=>todoItem.id == tid)
    if(todoIndex>=0){
        todos[todoIndex]={id:todos[todoIndex].id,text:body.text}
        return res.status(200).json(todos)
    }
    res.status(404).json({message:'could not find id'})
})
router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as requestParams
    todos = todos.filter(todo => todo.id !== params.todoId)
    res.status(200).json({message:'deleted todos'})
})
export default router 