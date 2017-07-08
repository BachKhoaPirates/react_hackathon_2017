export function player1LoadSuccess(player){
    console.log(1);
    return {
        type: 'PLAYER1_SUCCESS',
        player
    }
}
export function player2LoadSuccess(player){
    console.log(2);
    return {
        type: 'PLAYER2_SUCCESS',
        player
    }
}