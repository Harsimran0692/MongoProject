import express from "express";
import { create, fetch, updateUser, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.get('/fetch', fetch);
/**
 * @swagger
 * /api/user/fetch:
 *   get:
 *     summary: Fetch all users
 *     description: Retrieves all users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *       400:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */
route.post('/create', create)
/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                  type: string
 *     responses:
 *       200:
 *         description: User created successfully.
 *       400:
 *         description: User already exists.
 *       500:
 *         description: Internal server error.
 */

route.put("/update/:id", updateUser);
/**
 * @swagger
 * /api/user/update/{id}:
 *   put:
 *     summary: Update Users
 *     description: Update user in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated User.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 address:
 *                   type: string
 *       400:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */


route.delete("/delete/:id", deleteUser);
/**
 * @swagger
 * /api/user/delete/{id}:
 *   put:
 *     summary: Delete Users
 *     description: Delete user in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated User.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 address:
 *                   type: string
 *       400:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */


export default route;