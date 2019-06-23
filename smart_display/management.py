# -*- coding: utf-8 -*-

"""Console script for Smart Display."""
import click

from smart_display.web import app


@click.command()
# @click.argument('<arg>')
def manage():
    app.run('0.0.0.0', port=4242)
