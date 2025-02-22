import Knex from 'knex'


export async function up(knex:Knex){
    return knex.schema.createTable('connections',table => {
        table.increments('id').primary()


        table.integer('user_id')  //gera uma chave estrangeira
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })

    
}


export async function down(knex:Knex){
    return knex.schema.dropTable('class_schedule')
}