
## Questions

#### How to change the code to support different file format versions?

- Create new parsing function in `ParserService`

#### How will the import system change if in the future we need to get this data from a web API?

- Add module to work with HTTP/S such as `@nestjs/axios`. 
- Implement API call.
- Add crone task if needed by `@nestjs/schedule`.

#### If in the future it will be necessary to do the calculations using the national bank rate, how could this be added to the system?

- Update model to add national bank rate to DB.
- Update parser or add new method to update current one exchanges.
- Create function to calculate that needed. 

#### How would it be possible to speed up the execution of requests if the task allowed you to update market data once a day or even less frequently? 

- Caching
- Data Aggregation
- Background Updates
- Indexing

