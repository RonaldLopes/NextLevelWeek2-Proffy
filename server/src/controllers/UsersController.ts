import {Request, Response} from 'express'
import convertHourToMinutes from '../util/convertHourToMinutes'
import db from '../database/connection'



export default class UsersController{

    async index(request:Request,response:Response){
        const filters = request.query
        const user_id = filters.id as string
        if(!user_id){
            return response.status(400).json({
                error: "Missing user id"
            })
        }        
        const users = await db('classes')
            .where('users.id','=',user_id)
            .select(['users.*'])


        return response.json(users)
    }

    async create(request:Request,response:Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body
        const trx = await db.transaction()
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            })
            const user_id = insertedUsersIds[0]
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })
            const class_id = insertedClassesIds[0]
            
            const classSchedule = schedule.map((scheduleItem:ScheculeItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })
        
            await trx('class_schedule').insert(classSchedule)
        
            await trx.commit()
            return response.status(201).send()
        } catch (error) {
            await trx.rollback() // desfaz as transações q estavam pendentes
            console.log(`Error: ${error}`)
            return response.status(400).json('Unexpected error while creating a new class')
        }
    }
}