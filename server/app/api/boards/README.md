# Boards

## POST /api/boards
Creates a board.
* 200 with the new board in response when it is succeeded
* 400 when an error occurred

## GET /api/boards/:boardId
Returns a board with the given id.
* 200 with the board in response when it is succeeded
* 400 when an error occurred

## GET ALL /api/boards
Returns all boards.
* 200 with the boards in response when it is succeeded
* 400 when an error occurred

## DELETE /api/boards/:boardId
Removes a board with the given id.
* 204 when it is succeeded
* 400 when an error occurred