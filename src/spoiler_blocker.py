def spoiler_blocker(text,spoiler_words):
    # spoiler detection logic
    for word in spoiler_words:
        if word.lower() in text.lower():
            return True
    return False

if __name__ == "__main__":
    # main fn logic here
    user_input = input ("Enter text:")
    spoilers = ["spoiler", "plot twist", "ending"]
    
    if spoiler_blocker(user_input, spoilers):
        print("Spoiler detected! Content hidden.")
    else:
        print("No spoilers found. Enjoy reading!")
    pass
