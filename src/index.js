import * as shareThis from 'share-this';
import * as twSharer from 'share-this/dist/sharers/twitter';
import * as fbSharer from 'share-this/dist/sharers/facebook';
import * as liSharer from 'share-this/dist/sharers/linked-in';
import * as emailSharer from 'share-this/dist/sharers/email';

const selectionShare = shareThis({
  selector: 'body',
  sharers: [twSharer, fbSharer, liSharer, emailSharer],
});

selectionShare.init();
