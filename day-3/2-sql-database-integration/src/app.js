
const sequelize = require('./db');


const { DataTypes } = require('sequelize');

// Object Model
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }

}, {
    freezeTableName: false
});

/*

create table Users (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

*/

const Order = sequelize.define('Order', {
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
}, {
    freezeTableName: false
});

/*

create table Orders (
    id serial primary key,
    total integer not null,
    userId integer not null,
    foreign key (userId) references Users(id),
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

*/

const transactionExample = async () => {
    const transaction = await sequelize.transaction();

    try {
        const user = await User.create(
            { name: 'John Doe', email: 'john@example.com' },
            { transaction }
        );

        const order = await Order.create(
            { userId: user.id, total: 100 },
            { transaction }
        );

        await transaction.commit();
        console.log('Transaction committed');
    } catch (error) {
        await transaction.rollback();
        console.error('Transaction rolled back', error);
    }
};

transactionExample();

