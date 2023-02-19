let fibonacci = [
1,
1,
2,
3,
5
]
let text_list = ["amongus", "is", "cool"]
let empty_list: number[] = []
game.splash(text_list.removeAt(0))
info.setScore(text_list.length)
game.splash(info.score())
game.splash(text_list)
info.setScore(text_list.indexOf("is"))
game.splash(info.score())
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
text_list.reverse()
game.splash(text_list)
