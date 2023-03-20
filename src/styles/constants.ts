export const DEVICE_SIZE = {
  MOBILE_MIN: '320px',
  TABLET_MIN: '768px',
  DESKTOP_SMALL: '1300px',
}

export const DEVICE_MEDIA_QUERY = {
  SMALL: `(max-width: ${DEVICE_SIZE.TABLET_MIN})`,
  MOBILE: `(min-width: ${DEVICE_SIZE.MOBILE_MIN}) and (max-width: ${DEVICE_SIZE.TABLET_MIN})`,
  TABLET: `(min-width: ${DEVICE_SIZE.TABLET_MIN}) and (max-width: ${DEVICE_SIZE.DESKTOP_SMALL})`,
}
