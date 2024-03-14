# Import needed libraries
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS
import numpy as np
from PIL import Image


# Overview
# The purpose of this project is to take every frame from the music video Bad Apple, and run it through a Word Cloud generator
# To make this simple, I retrieved the frames from the following YouTube video (Check the pinned comment)
#   https://www.youtube.com/watch?v=sKx7VNsEkqs
# From here, the program just needs a way to run through each frame, turn it into a word cloud, and export the results as a new image
# After that, I can then use Blender (or really just any video editing software) to combine the frames back into a video, and add audio from there

# going to put in some optional goals here as a reminder of things to go for
# (C) Find a way to get the original kanji text to appear (Look into a font that supports Kanji)
#   Completed by setting the word cloud to use the font simsun
# (C) try disabling the size change of the word cloud to see if this creates a more even image
#   Plan here is to remove all duplicate words in the string variable and use the resulting set as the word cloud string
#   To do this, we also need a method to remove any special characters (Stuff like ?, !, ', and so on) as this seems to get around the duplicate word check
#   Found an issue where even if there are no duplicate words, Wordcloud will still have varying sizes in the resulting WordCloud
#   Completed by setting both min_font_size and max_font_size to the same value and setting repeat to True (Didn't even need to tinker with the original string)


# The function used to set all the colors in the word cloud to a single color
# This function specifically sets all the text to be white
def one_color_func_white(word=None, font_size=None,
                         position=None, orientation=None,
                         font_path=None, random_state=None):
    # Set the HSV value here
    h = 0
    s = 0
    l = 255
    return "hsl({}, {}%, {}%)".format(h, s, l)


# ===Main Method===
# Main Variables
currentFrame = 1  # make sure this is at least above 0, first frame is on 1
frameString = ""
cleanString = False
removeDuplicates = False
exportString = ""
invertMode = True  # if this is true, the image should have a black background with white text, and vice versa if false

# Debug Variables
exportImage = True  # controls if the program is allowed to export the resulting word art as an image

# Get the lyrics of the song
# We will have 2 versions, one in the original kanji, and another one using english text
songLyricsKanji = "流れてく　時の中ででも　気だるさが　ほらグルグル廻って 私から　離れる心も　見えないわ　そう知らない？ 自分から　動くこともなく　時の隙間に　流され続けて 知らないわ　周りのことなど　私は私　それだけ 夢見てる？　なにも見てない？　語るも無駄な　自分の言葉 悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの 戸惑う言葉　与えられても　自分の心　ただ上の空 もし私から　動くのならば　すべて変えるのなら　黒にする こんな自分に　未来はあるの？　こんな世界に　私はいるの？ 今切ないの？　今悲しいの？　自分の事も　わからないまま 歩むことさえ　疲れるだけよ　人のことなど　知りもしないわ こんな私も　変われるのなら　もし変われるのなら　白になる 流れてく　時の中ででも　気だるさがほら　グルグル廻って 私から　離れる心も　見えないわそう　知らない？ 自分から　動くこともなく　時の隙間に　流され続けて 知らないわ　周りのことなど　私は私　それだけ 夢見てる？　なにも見てない？　語るも無駄な　自分の言葉 悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの 戸惑う言葉　与えられても　自分の心　ただ上の空 もし私から　動くのならば　すべて変えるのなら　黒にする 無駄な時間に　未来はあるの？　こんな所に　私はいるの？ 私のことを　言いたいならば　ことばにするのなら　「ろくでなし」 こんな所に　私はいるの？ こんな時間に　私はいるの？ こんな私も　変われるもなら　もし変われるのなら　白になる 今夢見てる？　なにも見てない？　語るも無駄な　自分の言葉 悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの 戸惑う言葉　与えられても　自分の心　ただ上の空 もし私から　動くのならば　すべて変えるのなら　黒にする 動くのならば　動くのならば　すべて壊すわ　すべて壊すわ 悲しむならば　悲しむならば　私の心　白く変われる？ 貴方の事も　私のことも　全ての事も　まだ知らないの 重い目蓋を　開けたのならば　すべて壊すのなら　黒になれ！！！"
songLyricsRoman = "nagareteku toki no naka de demo kedarusa ga hora guruguru mawatte watashi kara hanareru kokoro mo mienai wa sou shiranai jibun kara ugoku koto mo naku toki no sukima ni nagasare tsuzukete shiranai wa mawari no koto nado watashi wa watashi sore dake yume miteru? nani mo mitenai? kataru mo muda na jibun no kotoba kanashimu nante tsukareru dake yo nani mo kanjizu sugoseba ii no tomadou kotoba ataerarete mo jibun no kokoro tada uwa no sora moshi watashi kara ugoku no naraba subete kaeru no nara kuro ni suru konna jibun ni mirai wa aru no? konna sekai ni watashi wa iru no? ima setsunai no? ima kanashii no? jibun no koto mo wakaranai mama ayumu koto sae tsukareru dake yo hito no koto nado shiri mo shinaiwa konna watashi mo kawareru no nara moshi kawareru no nara shiro ni naru? nagareteku toki no naka de demo kedarusa ga hora guruguru mawatte watashi kara hanareru kokoro mo mienaiwa sou shiranai jibun kara ugoku koto mo naku toki no sukima ni nagasare tsuzukete shiranai wa mawari no koto nado watashi wa watashi sore dake yume miteru? nani mo mitenai? kataru mo muda na jibun no kotoba kanashimu nante tsukareru dake yo nani mo kanjizu sugoseba ii no tomadou kotoba ataerarete mo jibun no kokoro tada uwa no sora moshi watashi kara ugoku no naraba subete kaeru no nara kuro ni suru muda na jikan ni mirai wa aru no? konna tokoro ni watashi wa iru no? watashi no koto wo iitai naraba kotoba ni suru no nara 'roku de nashi' konna tokoro ni watashi wa iru no? konna jikan ni watashi wa iru no? konna watashi mo kawareru no nara moshi kawareru no nara shiro ni naru? ima yume miteru? nani mo mitenai? kataru mo muda na jibun no kotoba? kanashimu nante tsukareru dake yo nani mo kanjizu sugoseba ii no tomadou kotoba ataerarete mo jibun no kokoro tada uwa no sora moshi watashi kara ugoku no naraba subete kaeru no nara kuro ni suru ugoku no naraba ugoku no naraba subete kowasu wa subete kowasu wa kanashimu naraba kanashimu naraba watashi no kokoro shiroku kawareru? anata no koto mo watashi no koto mo subete no koto mo mada shiranai no omoi mabuta wo aketa no naraba subete kowasu no nara kuro ni nare!!!"

exportString = songLyricsKanji

# The main loop used to create the word cloud on every frame
while currentFrame < 6954:

    # convert the current frame number to a string that can be used to open the correct image file
    frameString = str(currentFrame)
    # every image frame starts with frame and has several 0s before the number
    # the amount of 0s present will make the number appear to be a 5-digit number (I.E. 00001, 12345, 01234, etc.)
    # If the length of the string is less than 5, add a 0 to the start of the string
    while len(frameString) < 5:
        frameString = "0" + frameString
    # add the frame part and file extension of the image name to the string
    frameString = "frame" + frameString + ".png"
    # Debug: print the frameString variable for testing
    # print(frameString)

    # Load the image, Note for reference, all images share the same dimensions: 496 x 368
    maskIm = np.array(Image.open(r"imageFrames\\" + frameString))

    # notes regarding maskIm
    #   print(maskIm.size) #gives a value of 547584
    #   Image has a size of 496 x 368, multiplying these together should give a result of 182528
    #   The result we are getting here is 3 times the expected value
    #   print(maskIm[0,0])
    #   The array itself is multidimensional, with 3 sets of numbers in each [] (so [68 68 68] [88 88 88] and so on)
    #       First dimension is the row of the pixels (from left to right)
    #       Second dimension holds the RGB values for the pixel
    #       Third dimension gets you the individual R, G, or B values
    #   This explains the 3 times expected result issue
    #   Checking the first pixel in Aseprite shows that the RGB value matches the first array set of [68 68 68], so the numbers here are the RGB values
    #   So 255 is pure white and 0 is pure black

    # Clean the image, so it has as much pure black and white as possible
    # loop through the array, settings values under a certain threshold to 0 and above to 255, this allows the mask to actually fit to the images we have
    for i in range(len(maskIm)):
        maskIm[maskIm <= 199] = 0
        maskIm[maskIm >= 200] = 255

    # Set Stopwords as needed
    stopwords = set(STOPWORDS)

    # Create the wordcloud itself
    fig = plt.figure()
    # Make the figure with a black background and white text
    wordcloud = WordCloud(stopwords=stopwords,
                          mask=maskIm, background_color="black",
                          max_words=2000, max_font_size=6, min_font_size=6, repeat=True,
                          random_state=None, width=maskIm.shape[1],
                          height=maskIm.shape[0],
                          color_func=one_color_func_white,
                          font_path="font\\simsun.ttc",
                          scale=3)  # Upping the scale here because YouTube heavily compresses the results, making the text almost un-readable in certain parts
    # Actually make the wordcloud
    wordcloud.generate(exportString)

    # Export the result as an image
    if exportImage:
        wordcloud.to_file("export\\export" + str(currentFrame) + ".png")

    # Debug: Create the figure used to show the word cloud
    # plt.figure(figsize=(4.96, 3.68), facecolor=None)
    # plt.imshow(wordcloud, interpolation="None")
    # plt.axis("off")
    # Debug: Show the resulting figure
    # plt.show()

    # Debug: Export the test image array as a .png for study
    # testImage = Image.fromarray(maskIm)
    # testImage.save("test1.png")

    # Close the figures, this prevents a console error log about having too many activate figures, may cause memory issues as well if left un-checked
    plt.close()
    plt.close(fig)
    # move on to the next frame
    currentFrame += 1
