class Bookmarks {
  bookmarks: { [key: string]: any }

  constructor() {
    this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}')
  }

  private updateBookmarks(updatedBookmarksObject: any) {
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarksObject))
    this.getBookmarks()
  }

  getBookmarks() {
    this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}')
    return this.bookmarks
  }

  getBookmark(id: string) {
    const bookmark = this.bookmarks[id.toString()]
    return bookmark
  }

  addBookmark(newBookmark: any) {
    const updatedBoomarksObject = Object.assign({}, this.bookmarks, newBookmark)
    this.updateBookmarks(updatedBoomarksObject)
    return this.bookmarks
  }

  deleteBookmark(id: string) {
    delete this.bookmarks[id]
    this.updateBookmarks(this.bookmarks)
    return this.bookmarks
  }
}

export default new Bookmarks()
