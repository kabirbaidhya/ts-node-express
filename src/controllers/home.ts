import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function getAppInfo(req: Request, res: Response) {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
}
