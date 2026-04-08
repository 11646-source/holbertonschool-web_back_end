#!/usr/bin/env python3
"""
Module for callable multiplication
"""
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The value to multiply by.

    Returns:
        Callable[[float], float]: A function that takes a float and returns it multiplied by multiplier.
    """
    def multiplier_func(x: float) -> float:
        return x * multiplier

    return multiplier_func
