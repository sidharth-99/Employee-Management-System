import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import * as pg from 'pg';

const client=pg.Client;


 const conn = new client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee',
    password:'postgres',
    port: 5432,
});

if(conn.connect()){
    console.log("Connected");
}


export class EmployeeController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const { empid,fname,lname,age,designation ,salary } = req.body

        conn.query('INSERT INTO emp (empid, empfname, emplname, age,designation, salary) VALUES ($1, $2,$3,$4,$5,$6)', [empid,fname,lname,age,designation,salary], (error, results) => {
          if (error) {
            throw error
          }
          res.status(200).send(`User added `)
        })
    }

    public readall(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        conn.query('SELECT * FROM emp ORDER BY empid ASC', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const id2 = parseInt(req.params.id)
        const { empid,fname,lname,age,designation ,salary } = req.body

        conn.query('Update emp set empid=$1, empfname=$2, emplname=$3, age=$4,designation=$5, salary=$6 where id=$7)', [empid,fname,lname,age,designation,salary,id2], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User modified with ID: ${id2}`)
            }
        )
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
            const id = parseInt(req.params.id)

            conn.query('DELETE FROM emp WHERE empid = $1', [id], (error, results) => {
                if (error) {
                throw error
                }
                res.status(200).send(`User deleted with ID: ${id}`)
            })
    }

    public readbyid1(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const id = parseInt(req.params.id)

    conn.query('SELECT * FROM users WHERE empid = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        res.status(200).json(results.rows)
        })
    }

    public readbyid2(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const fname = parseInt(req.params.id)
        conn.query('SELECT * FROM users WHERE empfname = $1', [fname], (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
            })
        }

    public readbyid3(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const lname = parseInt(req.params.id)
        conn.query('SELECT * FROM users WHERE emplname = $1', [lname], (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
            })
    }

    public readbyid4(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const age = parseInt(req.params.id)
        conn.query('SELECT * FROM users WHERE age = $1', [age], (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
            })
    }
    public readbyid5(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const designation = parseInt(req.params.id)
        conn.query('SELECT * FROM users WHERE designation = $1', [designation], (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
            })
    }
    public readbyid6(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const salary = parseInt(req.params.id)
        conn.query('SELECT * FROM users WHERE salary = $1', [salary], (error, results) => {
            if (error) {
            throw error
            }
            res.status(200).json(results.rows)
            })
    }



}