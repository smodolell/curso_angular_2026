import { Gif } from '../interfaces/gif.interface';
import { GiphyItem, GiphyResponse } from '../interfaces/giphy.interfaces';

export class GifMapper {
  static mapGiphyItemToGif(giphyData: GiphyItem): Gif {
    return {
      id: giphyData.id,
      title: giphyData.title,
      url: giphyData.images.original.url,
    };
  }
  static mapGiphyItemsToGifs(items: GiphyItem[]): Gif[] {
    return items.map(GifMapper.mapGiphyItemToGif);
  }
}
