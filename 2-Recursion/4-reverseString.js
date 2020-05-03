function reverse(str) {
    if (str.length === 1)
        return reverse(str.slice(str) + str[0])
}

reverse('Sumair') //riamuS