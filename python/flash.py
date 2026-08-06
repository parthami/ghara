#!/usr/bin/python
# -*- coding:utf-8 -*-
import sys
sys.path.append('lib')
import os
libdir = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'lib')
if os.path.exists(libdir):
    sys.path.append(libdir)

import logging
from waveshare_epd import epd7in5_V2
import time
from PIL import Image,ImageDraw,ImageFont
import cairosvg
import io
import traceback

logging.basicConfig(level=logging.DEBUG)

try:
    raw_svg = sys.stdin.read()
    if not raw_svg:
        sys.exit(0)

    logging.info("epd7in5_V2 Demo")
    epd = epd7in5_V2.EPD()
    
    logging.info("init and Clear")
    epd.init()
    epd.Clear()

    logging.info("read bmp file")
    png_bytes = cairosvg.svg2png(bytestring=raw_svg.encode('utf-8'))
    Himage = Image.open(io.BytesIO(png_bytes))

    epd.display(epd.getbuffer(Himage))
    time.sleep(2)

    logging.info("Goto Sleep...")
    epd.sleep()
    
except IOError as e:
    logging.info(e)
    
except KeyboardInterrupt:    
    logging.info("ctrl + c:")
    epd7in5_V2.epdconfig.module_exit(cleanup=True)
    exit()