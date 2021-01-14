import { Router } from "express";
import authCustomer from "./middlewares/authCustomer";
import VanController from "./controllers/VanController";

const routes = Router();
const vanController = new VanController();

routes.get("/", function (req, res) {
	res.status = 500;
	res.json({ message: "Welcome to Api Collective Vans" });
});

routes.get("/test", function (req, res) {
	res.json({ message: process.env.DB_HOST });
});

routes.post("/van", function (req, res) {
	authCustomer(req, res, () => {
		vanController.create(req.body);
		res.json({ message: "is authenticaded" })
	});
});

routes.put("/van", function (req, res) {
	authCustomer(req, res, () => {
		res.json({ message: "is authenticaded" })
	});
});

routes.get("/van/:id", function (req, res) {
	authCustomer(req, res, () => {
		res.json({ message: "is authenticaded" })
	});
});

export default routes;
